export type Action = {type: "ADD_TOKEN"; payload: string }

//payload = irá armazenar o nosso tokenm, é o tipo dele seria string
// e o tipo da Action é ADD_TOKEN

export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token,
})


//Actions: São ações disparadas da aplicação para o store. Elas são criadas através das action creators. 
//As actions são a única forma de acionar uma mudança de estados no store. Reducers: Cada dado da store deve ter o seu próprio reducer.