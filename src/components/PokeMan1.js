import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class PokeMan1 extends Component {

    prevButton = () => {

        this.props.prev();
    }

    nextButton = () => {

        this.props.next();

    }



    render() {

        const { data, currentpage } = this.props;
        return (
            <>

                <section className="news-grid grid">
                    <div className="container">
                        <div className="row">


                            {
                                data && data.map((data1, index) => (


                                    <div className="col-md-4" key={data1.id}>
                                        <div className="pokemon--species" id="image_slider" >
                                            <div className="pokemon--species--name text-left" > {data1.name.toUpperCase()} <span style={{ float: 'right' }} >ID:{data1.id}</span></div>
                                            <div className="pokemon--species--container">
                                                <div className="pokemon--species--sprite">
                                                    <img src={`/sprites/${data1.id}.png`} alt={data1.name} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                ))
                            }
                        </div>

                        <div >

                            {(currentpage === 1) ?
                                <button className="button" disabled style={{ float: 'left' }}>Prev</button>
                                :
                                <button className="button" type="button" style={{ float: 'left' }} onClick={this.prevButton}>Prev</button>
                            }
                            <button className="button" type="button" style={{ float: 'right' }} onClick={this.nextButton}>Next</button>
                        </div>
                    </div>

                </section>
            </>
        )
    }
}




