using Documenter
using BioAtomsCount
using DocThemeIndigo

indigo = DocThemeIndigo.install(Configurations)

makedocs(;
    modules = [BioAtomsCount],
    format = Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical="https://camilogarciabotero.github.io/BioAtomsCount.jl",
        assets=String[indigo],
    ),
    pages = [
        "Home" => "index.md",
    ],
    repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl",
    sitename = "BioAtomsCount.jl",
)

deploydocs(; repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl")
