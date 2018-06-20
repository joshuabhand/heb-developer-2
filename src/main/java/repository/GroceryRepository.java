package main.java.repository;

import java.util.List;
import main.java.entity.Grocery;
import org.springframework.data.repository.query.Param;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "groceries", path = "groceries")
public interface GroceryRepository extends MongoRepository<Grocery, String> {
//    public List<Grocery> findByDescription(String description);
//    public Grocery findByid(String id);

    List<Grocery> findByDescription(@Param("description") String description);
    Grocery findByid(@Param("id") String id);
}
