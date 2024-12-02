package com.fatec.ProjetoWeb_back.Repository;

import com.fatec.ProjetoWeb_back.Entity.Cesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CestaRepository extends JpaRepository<Cesta, Integer> {
    @Query("SELECT COALESCE(MAX(c.codigo), 0) FROM Cesta c")
    int codMaximo();
}
