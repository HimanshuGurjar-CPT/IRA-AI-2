cmake_minimum_required(VERSION 3.22.1)
project("iris_native_engine")

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_library(
    iris_native_engine
    SHARED
    iris_core_engine.cpp
    iris_jni_bridge.cpp
)

find_library(
    log-lib
    log
)

target_link_libraries(
    iris_native_engine
    ${log-lib}
)
