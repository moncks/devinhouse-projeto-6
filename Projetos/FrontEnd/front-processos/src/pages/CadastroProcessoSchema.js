import * as Yup from 'yup';

export const processoSchema = Yup.object().shape({
    ano: Yup.string().required('Informe o Ano'),
    orgaoSetor: Yup.string().required('Informe o Orgao/Setor'),
    descricao: Yup.string().required('Informe a Descrição'),
    assunto: Yup.string().required('Informe o Assunto'),
    interessado: Yup.string().required('Informe o Interessado'),
});


export const processoInitialValues = {
    ano: '',
    orgaoSetor: '',
    descricao: '',
    assunto: '',
    interessado: ''
}