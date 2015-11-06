/**
 * Created by johnwilson on 11/5/15.
 */
export class MovieList {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.data="test my service";
  }
  getMovieList(){
    return this.$http.get('api/user/details');

  }
  getTestData(){
    return this.data;
  }

}

