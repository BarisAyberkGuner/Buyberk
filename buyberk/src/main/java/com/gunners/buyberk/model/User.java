package com.gunners.buyberk.model;



import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="first_name")
    private String firstName;
    @Column(name="password")
    private String password;
    @Column(name="email_id")
    private String eMailID;

    public User (){

    }

    public User(String firstName, String password, String eMailID) {
        this.firstName = firstName;
        this.password = password;
        this.eMailID = eMailID;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String geteMailID() {
        return eMailID;
    }

    public void seteMailID(String eMailID) {
        this.eMailID = eMailID;
    }
}
