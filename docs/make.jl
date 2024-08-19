using Documenter
using BioAtomsCount

DocMeta.setdocmeta!(BioAtomsCount, :DocTestSetup, :(using BioAtomsCount); recursive = true)

makedocs(;
    modules = [BioAtomsCount],
    authors = "Camilo García-Botero",
    repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl",
    sitename = "BioAtomsCount.jl",
    format = Documenter.HTML(
        canonical="https://camilogarciabotero.github.io/BioAtomsCount.jl",
        repolink = "https://github.com/camilogarciabotero/BioAtomsCount.jl"
    ),
    pages = [
        "Home" => "index.md",
    ],
    warnonly = true,
)

deploydocs(; repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl", devbranch = "main")
