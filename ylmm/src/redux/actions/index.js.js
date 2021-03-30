import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  FINISH_PLANTILLA,
  SELECT_PLANTILLA,
  
  RECHAZAR_DESPACHO,
  SAVE_ESTADOS_DESPACHO,
  ENTREGAR_DISPACHO,
  DELETE_ESTADOS_DESPACHO,
  RETIRAR_DISPACHO,
  REINGRESAR_DESPACHO,
  HAS_CONECTION,
  LOST_CONECTION,
  UPDATE_MOTIVO_DE_RECHAZO,
} from '../constants';

export const loginSucess = (authData) => ({
  type: AUTH_LOGIN,
  payload: authData,
});

export const logoutSucess = () => ({
  type: AUTH_LOGOUT,
});
export const selectPlantilla = (plantilla) => ({
  type: SELECT_PLANTILLA,
  payload: plantilla,
});
export const updateMotivoRechazo = (mr) => ({
  type: UPDATE_MOTIVO_DE_RECHAZO,
  payload: mr,
});
export const finishActivePlantilla = () => ({
  type: FINISH_PLANTILLA,
});
export const deviceConected = () => ({
  type: HAS_CONECTION,
});export const deviceNotConected = () => ({
  type: LOST_CONECTION,
});


export const rechazarDispacho = (oid,newState) => ({
  type: RECHAZAR_DESPACHO,
  payload:{ oid,newState}
});

export const entregarDispacho = (oid,newState) => ({
  type: ENTREGAR_DISPACHO,
  payload:{ oid,newState}
});
export const retirarDespacho = (oid,newState) => ({
  type: RETIRAR_DISPACHO,
  payload:{ oid,newState}
});
export const reingresarDespacho = (oid,newState) => ({
  type: REINGRESAR_DESPACHO,
  payload: {oid,newState}
});
export const saveEstadosDespacho = (estados) => ({
  type: SAVE_ESTADOS_DESPACHO,
  payload: estados,
});
export const deleteEstadosDespacho = () => ({
  type: DELETE_ESTADOS_DESPACHO,
});
