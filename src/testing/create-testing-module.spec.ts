import {Injectable} from '../decorators';
import {createTestingModule} from './create-testing-module';

describe('createTestingModule', () => {
    it('gets provider from testing module', () => {
        @Injectable()
        class ProviderStub {}

        const testingModule = createTestingModule({
            imports: [],
            providers: [ProviderStub],
        });

        expect(testingModule.get(ProviderStub)).toEqual(expect.any(ProviderStub));
    });
});
