import React, { Component } from "react";
import Title from "./Title";
import defaultImg from "../images/room-1.jpeg";


export default class FeaturedRooms extends Component {

    render() {
       
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg} alt="single room" /></div></article>
                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg} alt="single room" /></div></article></div>

            </section>
        );
    }
}
