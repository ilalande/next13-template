import Item from '@custom-types/interfaces';
import { createAction } from '@reduxjs/toolkit';

export const getItems = createAction('items/getItems');
export const getItemsSucced = createAction<Item[]>('items/getItemsSucced');
export const getFailed = createAction('items/getFailed');
