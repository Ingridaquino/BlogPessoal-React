export type Action = {type: "ADD_TOKEN"; payload: string }

//payload = irá armazenar o nosso tokenm, é o tipo dele seria string
// e o tipo da Action é ADD_TOKEN

export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token,
})