package com.thepracticaldeveloper.reactiveweb.blocking;

import com.thepracticaldeveloper.reactiveweb.beans.Quote;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface QuoteMongoBlockingRepository extends PagingAndSortingRepository<Quote, String> {

    List<Quote> findAllByIdNotNullOrderByIdAsc(final Pageable page);
}