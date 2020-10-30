import React from "react";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";

const MyFilmsPage = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageHeaderLogo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserAvatarBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList/>
      </section>

      <PageFooter/>
    </div>
  );
};

export default MyFilmsPage;
