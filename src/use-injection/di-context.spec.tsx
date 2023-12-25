import {render} from '@testing-library/react';
import React from 'react';
import {Injector} from '../injector';
import {DIContext} from './di-context';

describe('DIContext', () => {
    it('can access null injector', () => {
        const UIComponent = () => {
            const { injector } = React.useContext(DIContext);

            expect(injector).toBeNull();

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: null }}>
                <UIComponent />
            </DIContext.Provider>,
        );
    });

    it('can access non-null injector', () => {
        const injectorStub = new Injector();

        const UIComponent = () => {
            const { injector } = React.useContext(DIContext);

            expect(injector).toBe(injectorStub);

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: injectorStub }}>
                <UIComponent />
            </DIContext.Provider>,
        );
    });
});
