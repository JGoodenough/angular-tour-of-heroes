import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = [
			{ id: 11, name: 'Batman'},
			{ id: 12, name: 'Zelda'},
			{ id: 13, name: 'Bombasto'},
			{ id: 14, name: 'Celeritas'},
			{ id: 15, name: 'Magneta'},
			{ id: 16, name: 'RubberMan'}, 
			{ id: 17, name: 'Superman'},
			{ id: 18, name: 'Ultra'},
			{ id: 19, name: 'ZEN'},
			{ id: 20, name: 'RELAX'},
		];
		return {heroes};
	}
}