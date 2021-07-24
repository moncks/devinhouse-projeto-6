import { useState, useEffect } from 'react'
import {
  Button,
  Collapse,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from '@material-ui/core'
import { useStyles } from './ListagemProcesso.styles'
import ModalProcesso from './ModalProcesso'
import * as AssuntoService from '../utils/services/AssuntoService'
import * as ProcessoService from '../utils/services/ProcessoService'
import { CardContainer, CardProcessos } from '../components'

const ListagemProceso = () => {
  const classes = useStyles()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse((prev) => !prev)
  }

  const [assunto, setAssunto] = useState('')
  const handleChangeAssunto = (event) => {
    var value = event.target.value
    if (value) setNumeroDoProcesso('') // limpa o numero do processo, quando tem assunto
    setAssunto(value)
  }

  const [numeroDoProcesso, setNumeroDoProcesso] = useState('')
  const handleChangeNumeroDoProcesso = (event) => {
    var value = event.target.value
    if (value) setAssunto('') // limpa o assunto, quando tem numero do processo
    setNumeroDoProcesso(value)
  }

  const [assuntos, setAssuntos] = useState(null)
  const getAssuntos = async () => {
    if (!assuntos) {
      const response = await AssuntoService.findAll()
      setAssuntos(response?.data ?? [])
    }
  }

  const [processos, setProcessos] = useState(null)
  const getProcessos = async () => {
    if (!numeroDoProcesso) {
      setProcessos((await ProcessoService.findAll(assunto))?.data ?? [])
      return
    }

    const processoEncontrado = (await ProcessoService.find(numeroDoProcesso))?.data
    if (processoEncontrado) {
      setProcessos([processoEncontrado])
      return
    }

    setProcessos([])
  }

  useEffect(() => {
    getAssuntos()
    getProcessos()
  }, [])

  const handleClickBuscar = () => {
    getProcessos()
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.subTitulo} display="inline">
            Processos
          </Typography>
          <Button className={classes.btnFiltrar} color="primary" onClick={handleCollapse}>
            Filtrar
          </Button>
          <Collapse in={collapse}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Assunto</InputLabel>
              <Select value={assunto} onChange={handleChangeAssunto} label="Assunto">
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

            {/* COLOQUEI ESSE FORMCONTROL PRA CORRIGIR O DESALINHAMENTO */}
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="Número do processo"
                variant="outlined"
                value={numeroDoProcesso}
                onChange={handleChangeNumeroDoProcesso}
              />
            </FormControl>
            <Button onClick={handleClickBuscar}>Buscar</Button>
          </Collapse>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" className={classes.btnNovo} onClick={() => setIsModalVisible(true)}>
            NOVO
          </Button>
          <ModalProcesso open={isModalVisible} onClose={() => setIsModalVisible(false)}></ModalProcesso>
        </Grid>
      </Grid>

      {processos?.length > 0 ? (
        processos?.map((x) => <CardProcessos key={x.id} processo={x} />)
      ) : (
        <Typography>Nenhum processo encontrado.</Typography>
      )}
    </>
  )
}

export default ListagemProceso
