import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Niko' },
            { id: 12, name: 'Barco' },
            { id: 13, name: 'Bombaso' },
            { id: 14, name: 'Celebritas' },
            { id: 15, name: 'Magnet' },
            { id: 16, name: 'RubenrMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornados' }
        ];
        return { heroes };
    }
}