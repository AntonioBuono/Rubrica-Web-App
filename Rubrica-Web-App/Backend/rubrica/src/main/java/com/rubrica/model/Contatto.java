package com.rubrica.model;


import jakarta.persistence.*;

import java.io.Serializable;
//con l'interfaccia Serializable rendo la classe utilizzabile in diversi processi

//Annotazione che rende il dato persistente e mappato sempre sul DB
@Entity
public class Contatto implements Serializable {
    @Id // è la primary key sul DB
    @GeneratedValue(strategy = GenerationType.AUTO) // comando che genera un Indentità per ogni id in automatico
    private Long id;
    private String nome;
    private String cognome;
    private String Telefono;
    private String CodiceContatto;


    public Contatto() {
    }

    public Contatto(Long id, String name, String cognome, String telefono, String codiceContatto) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        Telefono = telefono;
        CodiceContatto = codiceContatto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return nome;
    }

    public void setName(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public String getCodiceContatto() {
        return CodiceContatto;
    }

    public void setCodiceContatto(String codiceContatto) {
        CodiceContatto = codiceContatto;
    }



}
