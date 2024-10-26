package com.thepracticaldeveloper.reactiveweb.reactive;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;

import com.thepracticaldeveloper.reactiveweb.beans.Quote;
import reactor.core.publisher.Flux;

public interface QuoteMongoReactiveRepository extends ReactiveSortingRepository<Quote, String> {

    Flux<Quote> findAllByIdNotNullOrderByIdAsc(final Pageable page);
}
