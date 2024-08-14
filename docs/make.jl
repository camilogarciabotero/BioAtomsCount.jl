using Documenter
using BioAtomCount
using DocThemeIndigo

indigo = DocThemeIndigo.install(Configurations)

makedocs(;
    modules = [BioAtomCount],
    format = Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical="https://Camilo García.github.io/BioAtomCount.jl",
        assets=String[indigo],
    ),
    pages = [
        "Home" => "index.md",
    ],
    repo = "https://github.com/Camilo García/BioAtomCount.jl",
    sitename = "BioAtomCount.jl",
)

deploydocs(; repo = "https://github.com/Camilo García/BioAtomCount.jl")
