import { useState, useEffect } from 'react'

import {
  Modal,
  Grid,
  TextField,
  Typography,
  Paper,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useStyles } from './ModalProcesso.styles'
import * as AssuntoService from '../utils/services/AssuntoService'
import * as InteressadoService from '../utils/services/InteressadoService'
import * as ProcessoService from '../utils/services/ProcessoService'

const ModalProcesso = ({ open, onClose, processo }) => {
  const classes = useStyles()

  const [erro, setErro] = useState(null)

  const [orgaoSetor, setOrgaoSetor] = useState(processo?.sgOrgaoSetor ?? '')
  const handleChangeOrgaoSetor = (event) => {
    var value = event.target.value
    setOrgaoSetor(value)
  }

  const [ano, setAno] = useState(processo?.nuAno ?? '')
  const handleChangeAno = (event) => {
    var value = event.target.value
    setAno(value)
  }

  const [descricao, setDescricao] = useState(processo?.descricao ?? '')
  const handleChangeDescricao = (event) => {
    var value = event.target.value
    setDescricao(value)
  }

  const [assunto, setAssunto] = useState(processo?.cdAssunto?.id ?? '')
  const handleChangeAssunto = (event) => {
    var value = event.target.value
    setAssunto(value)
  }

  const [interessado, setInteressado] = useState(processo?.cdInteressado?.id ?? '')
  const handleChangeInteressado = (event) => {
    var value = event.target.value
    setInteressado(value)
  }

  const [assuntos, setAssuntos] = useState(null)
  const getAssuntos = async () => {
    const response = await AssuntoService.findAll()
    setAssuntos(response?.data ?? [])
  }

  const [interessados, setInteressados] = useState(null)
  const getInteressados = async () => {
    const response = await InteressadoService.findAll()
    setInteressados(response?.data ?? [])
  }

  const salvar = async () => {
    const processoParaSalvar = {
      id: processo?.id,
      nuAno: ano,
      sgOrgaoSetor: orgaoSetor,
      descricao: descricao,
      cdAssuntoId: assunto,
      cdInteressadoId: interessado,
    }

    const response = processoParaSalvar.id
      ? await ProcessoService.update(processoParaSalvar, processoParaSalvar.id)
      : await ProcessoService.create(processoParaSalvar)

    if (response.status >= 400) {
      console.log(response.data)
      setErro(response.data)
      return
    }

    setErro(null)
    onClose(true)
  }

  useEffect(() => {
    getAssuntos()
    getInteressados()
  }, [])

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <Paper elevation={10} className={classes.paper}>
        <Typography variant="h4">
          {processo ? `Alterando processo: ${processo.nuProcesso}` : 'Criando processo'}
        </Typography>
        <br />

        {erro ? (
          <Alert severity="error" className={classes.alerta}>
            <Typography>{erro.mensagem}</Typography>
            {erro.campos
              ? erro.campos.map((campo) => (
                  <Typography>
                    * {campo.nome} - {campo.mensagem}
                  </Typography>
                ))
              : null}
          </Alert>
        ) : null}

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Orgão Setor" variant="outlined" value={orgaoSetor} onChange={handleChangeOrgaoSetor} />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Ano" variant="outlined" value={ano} onChange={handleChangeAno} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              value={descricao}
              onChange={handleChangeDescricao}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <InputLabel>Assunto</InputLabel>
              <Select fullWidth value={assunto} onChange={handleChangeAssunto} label="Assunto">
                <MenuItem value="">
                  <em>(nenhum)</em>
                </MenuItem>
                {assuntos?.map((x) => (
                  <MenuItem value={x.id} key={x.id}>
                    {x.descricao}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <InputLabel>Interessado</InputLabel>
              <Select fullWidth value={interessado} onChange={handleChangeInteressado} label="Interessado">
                <MenuItem value="">
                  <em>(nenhum)</em>
                </MenuItem>
                {interessados?.map((x) => (
                  <MenuItem value={x.id} key={x.id}>
                    {x.nmInteressado}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="text" className={classes.btnSalvar} onClick={salvar}>
                Salvar
              </Button>
              <Button variant="text" onClick={onClose}>
                Fechar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ModalProcesso
