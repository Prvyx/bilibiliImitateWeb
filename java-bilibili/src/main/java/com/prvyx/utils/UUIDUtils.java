package com.prvyx.utils;

import java.util.UUID;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/01 18:45
 */

public class UUIDUtils {
    public static String getRandomVidByUUID(int number) {
        return UUID.randomUUID().toString().replaceAll("-","").substring(0,number);
    }
}
