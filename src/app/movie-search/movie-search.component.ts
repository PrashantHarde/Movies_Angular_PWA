import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../_services/APIService.service';
import { MovieDetails } from '../_models/MovieDetails'
import { ResponseData } from '../_models/ResponseModel'
import { DataService } from '../_services/DataService'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  SearchedMovies: MovieDetails[];
  selectedMovie: MovieDetails;

  constructor(private serviceApi: APIServiceService, private dataService: DataService, private toastr: ToastrService) {

    this.dataService.SearchText.subscribe(data => {
      this.getMoviesList(data);
    });
  }

  ngOnInit(): void {
  }

  getMoviesList(searchText: string) {
    console.log(searchText);

    if (!searchText) {
      searchText = "Avengers";
    }

    this.serviceApi.GetMovieListById(searchText)
      .subscribe(
        data => {
          if (data) {
            let result = data as ResponseData;
            if (data.Response == "False") {
              this.toastr.error(data.Error, 'Error');
            }
            else {
              this.SearchedMovies = data.Search as MovieDetails[];
              this.toastr.success("Data Fetched Successfully.", 'Success');
            }
          }
          else {
            this.toastr.warning("Something went wrong please try again..!", 'warning');
            //this.alertService.warningSnack("Widget details not found.");
            //this.spinner.hide("addOrRemoveWidgetDialogSpinner");
          }
        },
        error => {
          console.error(error);
          this.toastr.error("Something went wrong please try again..!", 'error');
        });
  }

  selectedMovieClicked(selectedMovie: MovieDetails) {
    this.serviceApi.GetSelectedMovieListById(selectedMovie.imdbID)
      .subscribe(
        data => {
          if (data) {
            this.selectedMovie = data as MovieDetails;
          }
          else {
            this.toastr.warning("Something went wrong please try again..!", 'warning');
          }
        },
        error => {
          console.error(error);
          this.toastr.error("Something went wrong please try again..!", 'error');
        });
  }
}
