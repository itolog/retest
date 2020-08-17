
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    products(): Product[] | Promise<Product[]>;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
}
