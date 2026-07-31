from setuptools import setup, Extension
import pybind11

ext_modules = [
    Extension(
        "iris_native_py",
        [
            "iris_native_py.cpp",
            "../../android/app/src/main/cpp/iris_core_engine.cpp",
            "../../android/app/src/main/cpp/iris_simd_matrix.cpp",
            "../../android/app/src/main/cpp/iris_conformer_encoder.cpp",
        ],
        include_dirs=[
            pybind11.get_include(),
            "../../android/app/src/main/cpp",
        ],
        language="c++",
        extra_compile_args=["-std=c++17", "-O3"],
    ),
]

setup(
    name="iris_native_py",
    version="2.4.0",
    author="IRIS-MX AI Platform",
    description="Python C++ bindings for low-latency native engine",
    ext_modules=ext_modules,
)
