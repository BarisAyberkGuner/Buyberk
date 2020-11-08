package com.gunners.buyberk.model;

import javax.persistence.*;



    @Entity
    @Table(name = "orders")
    public class Order {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        @Column(name="order_adress")
        private String orderAdress;
        @Column(name = "product_id")
        private long productID;
        @Column(name = "product_name")
        private String productName;
        @Column(name = "product_price")
        private double productPrice;
        @Column(name = "product_category")
        private String productCategory;
        public Order(){


        }

        public Order(String orderAdress, long productID, String productName, double productPrice, String productCategory) {
            this.orderAdress = orderAdress;
            this.productID = productID;
            this.productName = productName;
            this.productPrice = productPrice;
            this.productCategory = productCategory;
        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getOrderAdress() {
            return orderAdress;
        }

        public void setOrderAdress(String orderAdress) {
            this.orderAdress = orderAdress;
        }

        public long getProductID() {
            return productID;
        }

        public void setProductID(long productID) {
            this.productID = productID;
        }

        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public double getProductPrice() {
            return productPrice;
        }

        public void setProductPrice(double productPrice) {
            this.productPrice = productPrice;
        }

        public String getProductCategory() {
            return productCategory;
        }

        public void setProductCategory(String productCategory) {
            this.productCategory = productCategory;
        }
    }
