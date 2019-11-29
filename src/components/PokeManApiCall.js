import React, { Component } from 'react'
import axios from 'axios';
import PokeMan1 from './PokeMan1'
export default class PokeManApiCall extends Component {


    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }

    }
    list = [];
    pageList = [];
    currentPage = 1;
    numberPerPage = 3;
    numberOfPages = 0;

    getNumberOfPages = () => {
        //const [numberPerPage, list] = this.state;
        return Math.ceil(this.list.length / this.numberPerPage);
    }
    nextPage = () => {


        this.currentPage += 1;
        this.setState({ curePage: this.currentPage })
        console.log('inside next');
        console.log(this.currentPage);

        this.loadList()
    }

    previousPage = () => {
        // const [currentPage] = this.state;
        this.currentPage -= 1;
        console.log('prev page');
        console.log(this.currentPage);
        this.setState({ curePage: this.currentPage })
        this.loadList();
    }
    loadList = () => {

        var begin = ((this.currentPage - 1) * this.numberPerPage);
        var end = begin + this.numberPerPage;
        this.pageList = this.list.slice(begin, end)
        // this.drawList();
        //check();
        this.setState({ posts: this.pageList })
    }


    componentDidMount() {
        this.setState({ curePage: this.currentPage })
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                console.log(response);
                for (var i = 0; i < response.data.results.length; i++) {
                    var url = response.data.results[i].url;
                    url = url.substring(0, url.length - 1);
                    var m = url.lastIndexOf('/');
                    response.data.results[i].id = url.substring(m + 1);
                }
                this.list = response.data.results;
                this.numberOfPages = this.getNumberOfPages();
                this.loadList();
            })
            .catch(error => { console.log(error) })


    }
    render() {

        const { posts } = this.state
        return (
            <div>
                <PokeMan1 data={posts} next={this.nextPage} prev={this.previousPage} />
            </div>
        )
    }
}

