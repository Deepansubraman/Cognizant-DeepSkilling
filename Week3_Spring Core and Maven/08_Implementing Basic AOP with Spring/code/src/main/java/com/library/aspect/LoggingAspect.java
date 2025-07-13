package com.library.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {

    @Before("execution(* com.library.service.BookService.addBook(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("🔍 [Before] Method: " + joinPoint.getSignature().getName());
    }

    @After("execution(* com.library.service.BookService.addBook(..))")
    public void logAfter(JoinPoint joinPoint) {
        System.out.println("✅ [After] Method: " + joinPoint.getSignature().getName() + " completed");
    }
}
