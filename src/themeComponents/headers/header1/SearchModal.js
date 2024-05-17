import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./styles/Header2.module.scss";
import Search from "./assets/images/search.svg";
import Close from "./assets/images/close.svg";
import { useState } from "react";

const SearchModal = ({ setSearchShow }) => {
  return (
    <>
      <div className={styles.searchModal}>
        <div className="searchModal-content">
          <div className="container">
            <div className="search-title">
              <h4>عن ماذا تريد البحث عن ؟</h4>
              <button onClick={() => setSearchShow(false)}><Close/></button>
            </div>
            <div className="search-modal-content-div">
              <input
                type="text"
                placeholder="ابحث عن ..."
                className="form-control"
              />
              <button type="submit">
                <Search />
              </button>
            </div>
          </div>
        </div>
        <div className="searchModal-overlay"></div>
      </div>
    </>
  );
};

export default SearchModal;
