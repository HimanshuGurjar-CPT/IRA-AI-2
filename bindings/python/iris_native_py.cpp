#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include "../../android/app/src/main/cpp/iris_core_engine.h"

namespace py = pybind11;

PYBIND11_MODULE(iris_native_py, m) {
    m.doc() = "IRIS-MX Low-Latency Native C++ Engine Python Bindings";

    py::class_<iris::core::IrisCoreEngine>(m, "IrisCoreEngine")
        .def(py::init<>())
        .def("initialize_engine", &iris::core::IrisCoreEngine::initializeEngine)
        .def("reset_state", &iris::core::IrisCoreEngine::resetState);
}
