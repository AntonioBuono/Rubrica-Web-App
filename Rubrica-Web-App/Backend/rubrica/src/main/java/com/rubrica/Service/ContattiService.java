package com.rubrica.Service;

import com.rubrica.Exception.UserNotFoundException;
import com.rubrica.Repo.ContattiRepo;
import com.rubrica.model.Contatto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ContattiService {
    //per inniettare la classe repo qui dentro
    private final ContattiRepo contattiRepo;


    private List<Contatto> contacts;
    //così da poter fare tutte le operazioni che desideriamo
@Autowired
    public ContattiService(ContattiRepo contattiRepo) {
        this.contattiRepo = contattiRepo;
    }

    //metodo aggiungere contatto
    public Contatto addContatto(Contatto contatto ){
    contatto.setCodiceContatto(UUID.randomUUID().toString());
    return contattiRepo.save(contatto);
    }

    //metodo per ritornare una lista di contatti
    public List<Contatto>findAllContatti(){
    return  contattiRepo.findAll();
    }

    public Contatto updateContatto(Contatto contatto){
        return contattiRepo.save(contatto);
    }

    public Contatto findContattoById(Long id){
    return contattiRepo.findContattoById(id).orElseThrow(
            ()-> new UserNotFoundException("User by id "+id+"was not found"));
    }

    public void deleteContatto(Long id){
    contattiRepo.deleteContattoById(id);
    }

}
