import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if(!btn) return;

    const goToPage = +btn.dataset.goto
    console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // generate button back
    const _generateLastPage = `
          <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
    // generate button forward
    const _generateNextPage = `
         <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return _generateNextPage;
    }

    // Last Page
    if (curPage === numPages && numPages > 1) return _generateLastPage;

    // Other Page
    if (curPage < numPages) {
      return `${_generateLastPage} ${_generateNextPage}`;
    }
    // Page 1, and there are No other pages
    return '';
  }
}

export default new PaginationView();
