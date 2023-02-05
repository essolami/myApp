import React, { Component } from "react";
import "./styles.scss";
class Playlists extends Component {
  render() {
    return (
      <>
        <section className="playlists_container">
          <div className="playlists_infos">
            <div className="infos">
              <h2 className="title">
                <a>{this.props.title}</a>
              </h2>
            </div>
            <a className="see_all">See All</a>
          </div>
          <div className="grid_container">
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
                <button></button>
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large" />
              </div>
              <div className="item_info">
                <a dir="auto">Hot Arabic Hits - Yalla يلا</a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Playlists;
