package main.java.repository;

import com.mongodb.WriteResult;
import com.mongodb.DBObject;
import main.java.entity.Grocery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.BasicQuery;
import com.mongodb.*;


import java.util.ArrayList;
import java.util.List;

public class CustomGroceryRepositoryImpl implements CustomGroceryRepository {
    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public List<Grocery> findByCustom(String id) {
        List<Criteria> andCriteria = new ArrayList<Criteria>();
        Query query = new Query();

        andCriteria.add(Criteria.where("id").is(id));

        for(Criteria criteria : andCriteria) {
            query.addCriteria(criteria);
        }

        return mongoTemplate.find(query, Grocery.class);
    }

    @Override
    public List<Grocery> findByCustom2(String id, String description, String shelfLife, String department) {
        Criteria criteria = new Criteria();
        criteria.orOperator(Criteria.where("id").is(id), Criteria.where("description").is(description),
                Criteria.where("shelfLife").is(shelfLife), Criteria.where("department").is(department));
        Query query = new Query(criteria);

        return mongoTemplate.find(query, Grocery.class, "collectionName");
    }
}
