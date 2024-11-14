package com.fatec.ProjetoWeb_back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.ProjetoWeb_back.Entity.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    
}
