package com.rubrica.Repo;

import com.rubrica.model.Contatto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//passiamo la classe contatto all'interfaccia JpaRepository e la primary key!
public interface ContattiRepo extends JpaRepository <Contatto,Long>{
    void deleteContattoById(Long id);

   Optional<Contatto> findContattoById(Long id);
}
