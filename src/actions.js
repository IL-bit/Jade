import { createAction } from "@reduxjs/toolkit";

export const prevPage = createAction('BACK');
export const nextPage = createAction('NEXT');
export const changePage = createAction('CHANGE');
export const togglePopup = createAction('TOGGLEPOPUP');