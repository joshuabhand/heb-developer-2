package main.java.repository;

import java.util.List;
import main.java.entity.Grocery;
import org.springframework.data.repository.query.Param;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface CustomGroceryRepository {
    List<Grocery> findByCustom(@Param("id") String id);
    List<Grocery> findByCustom2(@Param("id") String id, @Param("description") String description,
                                @Param("shelfLife") String shelfLife, @Param("department") String department);
}