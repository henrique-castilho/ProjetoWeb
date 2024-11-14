package com.fatec.ProjetoWeb_back.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.ProjetoWeb_back.Entity.Cliente;
import com.fatec.ProjetoWeb_back.Repository.ClienteRepository;

@RestController
public class ClienteController {

    @Autowired
    ClienteRepository bd;

    @PostMapping("/api/cliente")
    public String gravar(@RequestBody Cliente obj) {
        if (obj.getNome().isEmpty() || obj.getEmail().isEmpty() || obj.getDocumento().isEmpty() || obj.getTelefone().isEmpty() || 
            obj.getLogradouro().isEmpty() || obj.getCep().isEmpty() || obj.getCidade().isEmpty() || obj.getSenha().isEmpty() ||
            obj.getConfirmar().isEmpty()) {
            return "Erro: Todo os campos devem ser preenchidos";
        }

        if (!obj.getSenha().equals(obj.getConfirmar())) {
            return "Erro: A senha e a confirmação da senha devem ser iguais.";
        }

        Optional<Cliente> clienteExiste = bd.findByEmailDocumento(obj.getEmail(), obj.getDocumento());
        if (clienteExiste.isPresent()) {
            return "Erro: Cliente já cadastrado com as mesmas informações";
        }
        bd.save(obj);
        return "O cliente " + obj.getNome() + " foi salvo corretamente";
    }

    @PutMapping("/api/cliente")
    public String alterar(@RequestBody Cliente obj){
        if (obj.getNome().isEmpty() || obj.getEmail().isEmpty() || obj.getDocumento().isEmpty() || obj.getTelefone().isEmpty() || 
            obj.getLogradouro().isEmpty() || obj.getCep().isEmpty() || obj.getCidade().isEmpty() || obj.getSenha().isEmpty() ||
            obj.getConfirmar().isEmpty()) {
            return "Erro: Todo os campos devem ser preenchidos para realizar a alteração";
        }
        if (!obj.getSenha().equals(obj.getConfirmar())) {
            return "Erro: A senha e a confirmação da senha devem ser iguais.";
        }

        Optional<Cliente> clienteExiste = bd.findById(obj.getCodigo());
        if (!clienteExiste.isPresent()) {
            return "Erro: Cliente não encontrado para alteração.";
        }
        bd.save(obj);
        return "O cliente " + obj.getNome() + " foi alterado corretamente";
    }

    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregar(@PathVariable int codigo){
        Optional<Cliente> obj = bd.findById(codigo);
        if (obj.isPresent()) {
            return obj.get();   
        } else {
            return null;
        }
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public String remover(@PathVariable int codigo) {
        if (bd.existsById(codigo)) {
            bd.deleteById(codigo);
            return "Registro " + codigo + " removido com sucesso!";
        } else {
            return "Cliente não encontrado";
        }
    }

    @GetMapping("/api/clientes")
    public List<Cliente> listar(){
        return bd.findAll();
    }

    @PostMapping("/api/cliente/login")
    public Cliente fazerLogin(@RequestBody Cliente obj){
        Optional<Cliente> retorno = bd.login(obj.getEmail(), obj.getSenha());
        if (retorno.isPresent()) {
            return retorno.get();
        } else {
            return null;
        }
    }

    @PostMapping("/api/cliente/recupera")
    public Cliente recuperarSenha(@RequestBody Cliente obj){
        Optional<Cliente> retorno = bd.recuperaSenha(obj.getEmail());
        if (retorno.isPresent()) {
            return retorno.get();
        } else {
            return null;
        }
    }
}
