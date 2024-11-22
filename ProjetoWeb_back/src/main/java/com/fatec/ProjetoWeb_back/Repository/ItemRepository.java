package com.fatec.ProjetoWeb_back.Repository;

import com.fatec.ProjetoWeb_back.Entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    
}
