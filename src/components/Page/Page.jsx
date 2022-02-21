import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css'

const Page = () => {
   const {isError, isLoading, forecast, submitRequest} = useForecast();

   const onSubmit = (value) => {
       submitRequest(value);
   }

    return (
        <Fragment>
            <Header />
           {!forecast && (   
                <div className={styles.box} >
                {/**Form*/}
                {!isLoading && <Form submitSearch={onSubmit}/>}
                {/**Error*/}
                {isError && <Error message={isError}/>}
          
                {/**Loader*/}
                {isLoading && <Loader />}
                
                {/**Forecast*/}
            </div>
        )}
        {forecast && <Forecast  forecast={forecast} /> }
        </Fragment>
    );
};

export default Page;
