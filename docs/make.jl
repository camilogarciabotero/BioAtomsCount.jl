using Documenter
using DocumenterVitepress
using BioAtomsCount

DocMeta.setdocmeta!(BioAtomsCount, :DocTestSetup, :(using BioAtomsCount); recursive = true)

makedocs(;
    modules = [BioAtomsCount],
    authors = "Camilo García-Botero",
    repo = Remotes.GitHub("camilogarciabotero", "BioAtomsCount.jl"),
    sitename = "BioAtomsCount.jl",
    format = DocumenterVitepress.MarkdownVitepress(
        repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl"
    ),
    pages = [
        "Home" => "index.md",
        "Getting Started" => "getstarted.md",
        "API Reference" => "api.md"
    ],
    warnonly = [:missing_docs],
)

DocumenterVitepress.deploydocs(; 
        repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl", 
        target = "build",
        devbranch = "main"
    )
