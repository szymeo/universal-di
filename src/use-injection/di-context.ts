import {createContext} from 'react';
import {Injector} from '../injector';
import {Optional} from "../types";

export const DIContext = createContext<{ injector: Optional<Injector> }>({ injector: undefined });
