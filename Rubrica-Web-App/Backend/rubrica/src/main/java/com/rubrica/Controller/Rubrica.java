package com.rubrica.Controller;

import com.rubrica.Repo.ContattiRepo;
import com.rubrica.Service.ContattiService;
import com.rubrica.model.Contatto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rubrica")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class Rubrica {
    private final ContattiService contattiService;

    public Rubrica(ContattiService contattiService) {
        this.contattiService = contattiService;
    }

    //specifichiamo cosa vogliamo che ci ritorni la nostra chiamata
    @GetMapping("/all")
    public ResponseEntity<List<Contatto>> getAllContatti(){
        List<Contatto> contattiList = contattiService.findAllContatti();
        return new ResponseEntity<>(contattiList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Contatto> getContatto(@PathVariable("id")Long id){
       Contatto contatto = contattiService.findContattoById(id);
        return new ResponseEntity<>(contatto, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Contatto> addContatto(@RequestBody Contatto contatto){
        Contatto nuovoContatto = contattiService.addContatto(contatto);
        return new ResponseEntity<>(contatto, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Contatto> updateContatto(@PathVariable Long id,@RequestBody Contatto contattoDettagli){
        //troviamo l'id del nostro contatto
        Contatto contatto = contattiService.findContattoById(id);

        contatto.setCognome(contattoDettagli.getCognome());
        contatto.setName(contattoDettagli.getName());
        contatto.setTelefono(contattoDettagli.getTelefono());

    Contatto updatedContatto = contattiService.updateContatto(contatto);
        return ResponseEntity.ok(updatedContatto);
    }
    @DeleteMapping("/delete/{id}")
    //ci ritornerà un oggetto vuoto ?
    public ResponseEntity<?> deleteContatto(@PathVariable("id")Long id){
        contattiService.deleteContatto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
