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
} from '@material-ui/core'
import { useStyles } from './ListagemProcesso.styles'
import ModalProcesso from './ModalProcesso'
import * as AssuntoService from '../utils/services/AssuntoService'

const ListagemProceso = () => {
  const classes = useStyles()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse((prev) => !prev)
  }

  const [assunto, setAssunto] = useState('')
  const handleChangeAssunto = (event) => {
    console.log(event)
    setAssunto(event.target.value)
  }

  const [assuntos, setAssuntos] = useState(null)
  const getAssuntos = async () => {
    if (!assuntos) setAssuntos((await AssuntoService.findAll()) ?? [])
  }

  useEffect(() => {
    getAssuntos()
  })

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6" display="inline">
            Processos
          </Typography>
          <Button className={classes.btnFiltrar} onClick={handleCollapse}>
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
              <TextField id="outlined-basic" label="Chave do processo" variant="outlined" />
            </FormControl>
          </Collapse>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" className={classes.btnNovo} onClick={() => setIsModalVisible(true)}>
            NOVO
          </Button>
          <ModalProcesso open={isModalVisible} onClose={() => setIsModalVisible(false)}></ModalProcesso>
        </Grid>
      </Grid>
    </>
  )
}

export default ListagemProceso
