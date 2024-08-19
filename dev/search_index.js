var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"\n<p align=\"center\">\n  <img src=\"assets/logo.svg\" height=\"150\"><br/>\n  <i>Counting BioSequences' atoms.</i>\n</p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"\n<div style=\"text-align: center;\">\n\n<a href=\"https://camilogarciabotero.github.io/BioAtomsCount.jl/dev/\">\n  <img src=\"https://img.shields.io/badge/documentation-online-blue.svg?logo=Julia&logoColor=white\" alt=\"Documentation\">\n</a>\n<a href=\"https://github.com/camilogarciabotero/BioAtomsCount.jl/releases/latest\">\n  <img src=\"https://img.shields.io/github/release/camilogarciabotero/BioAtomsCount.jl.svg\" alt=\"Release\">\n</a>\n<a href=\"https://doi.org/10.5281/zenodo.7519184\">\n  <img src=\"https://zenodo.org/badge/DOI/10.5281/zenodo.7519184.svg\" alt=\"DOI\">\n</a>\n<a href=\"https://github.com/camilogarciabotero/BioAtomsCount.jl/actions/workflows/CI.yml\">\n<br>\n  <img src=\"https://github.com/camilogarciabotero/BioAtomsCount.jl/actions/workflows/CI.yml/badge.svg\" alt=\"GitHub Actions\">\n</a>\n<a href=\"https://github.com/camilogarciabotero/BioAtomsCount.jl/blob/main/LICENSE\">\n  <img src=\"https://img.shields.io/badge/license-MIT-green.svg\" alt=\"License\">\n</a>\n<a href=\"https://www.repostatus.org/#wip\">\n  <img src=\"https://www.repostatus.org/badges/latest/wip.svg\" alt=\"Repo Status\">\n</a>\n<a href=\"http://juliapkgstats.com/pkg/BioAtomsCount\">\n  <img src=\"https://img.shields.io/badge/dynamic/json?url=http%3A%2F%2Fjuliapkgstats.com%2Fapi%2Fv1%2Fmonthly_downloads%2FBioAtomsCount&query=total_requests&suffix=%2Fmonth&label=Downloads\" alt=\"Downloads\">\n</a>\n<a href=\"https://github.com/JuliaTesting/Aqua.jl\">\n  <img src=\"https://raw.githubusercontent.com/JuliaTesting/Aqua.jl/master/badge.svg\" alt=\"Aqua QA\">\n</a>\n\n</div>\n","category":"page"},{"location":"#BioAtomsCount","page":"Home","title":"BioAtomsCount","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is a fast and lightweight package that counts the number of atoms in a given BioSequence object. It was inspired by the Biocost.jl package.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add BioAtomsCount","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The BioAtomsCount module exports a single function countatoms which takes a BioSequence object as input and returns a matrix of the count of atoms in the sequence. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each column of the matrix corresponds to a different atom (C, H, N, O) for DNA and (C, H, N, O, S) for proteins and each row corresponds to a different residue in the sequence.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here is an example of a DNA sequence:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BioSequences\n\nphi = dna\"GTGTGAGGTTATAACGCCGAAGCGGTAAAAATTTTAATTTTTGCCGCTGAGGGGTTGACCAAGCGAAGCGCGGTAGGTTTTCTGCTTAGGAGTTTAATCATGTTTCAGACTTTTATTTCTCGCCATAATTCAAACTTTTTTTCTGATAAGCTGGTTCTCACTTCTGTTACTCCAGCTTCTTCGGCACCTGTTTTACAGACACCTAAAGCTACATCGTCAACGTTATATTTTGATAGTTTGACGGTTAATGCTGGTAATGGTGGTTTTCTTCATTGCATTCAGATGGATACATCTGTCAACGCCGCTAATCAGGTTGTTTCTGTTGGTGCTGATATTGCTTTTGATGCCGACCCTAAATTTTTTGCCTGTTTGGTTCGCTTTGAGTCTTCTTCGGTTCCGACTACCCTCCCGACTGCCTATGATGTTTATCCTTTGAATGGTCGCCATGATGGTGGTTATTATACCGTCAAGGACTGTGTGACTATTGACGTCCTTCCCCGTACGCCGGGCAATAACGTTTATGTTGGTTTCATGGTTTGGTCTAACTTTACCGCTACTAAATGCCGCGGATTGGTTTCGCTGAATCAGGTTATTAAAGAGATTATTTGTCTCCAGCCACTTAAGTGAGGTGATTTATGTTTGGTGCTATTGCTGGCGGTATTGCTTCTGCTCTTGCTGGTGGCGCCATGTCTAAATTGTTTGGAGGCGGTCAAAAAGCCGCCTCCGGTGGCATTCAAGGTGATGTGCTTGCTACCGATAACAATACTGTAGGCATGGGTGATGCTGGTATTAAATCTGCCATTCAAGGCTCTAATGTTCCTAACCCTGATGAGGCCGCCCCTAGTTTTGTTTCTGGTGCTATGGCTAAAGCTGGTAAAGGACTTCTTGAAGGTACGTTGCAGGCTGGCACTTCTGCCGTTTCTGATAAGTTGCTTGATTTGGTTGGACTTGGTGGCAAGTCTGCCGCTGATAAAGGAAAGGATACTCGTGATTATCTTGCTGCTGCATTTCCTGAGCTTAATGCTTGGGAGCGTGCTGGTGCTGATGCTTCCTCTGCTGGTATGGTTGACGCCGGATTTGAGAATCAAAAAGAGCTTACTAAAATGCAACTGGACAATCAGAAAGAGATTGCCGAGATGCAAAATGAGACTCAAAAAGAGATTGCTGGCATTCAGTCGGCGACTTCACGCCAGAATACGAAAGACCAGGTATATGCACAAAATGAGATGCTTGCTTATCAACAGAAGGAGTCTACTGCTCGCGTTGCGTCTATTATGGAAAACACCAATCTTTCCAAGCAACAGCAGGTTTCCGAGATTATGCGCCAAATGCTTACTCAAGCTCAAACGGCTGGTCAGTATTTTACCAATGACCAAATCAAAGAAATGACTCGCAAGGTTAGTGCTGAGGTTGACTTAGTTCATCAGCAAACGCAGAATCAGCGGTATGGCTCTTCTCATATTGGCGCTACTGCAAAGGATATTTCTAATGTCGTCACTGATGCTGCTTCTGGTGTGGTTGATATTTTTCATGGTATTGATAAAGCTGTTGCCGATACTTGGAACAATTTCTGGAAAGACGGTAAAGCTGATGGTATTGGCTCTAATTTGTCTAGGAAATAACCGTCAGGATTGACACCCTCCCAATTGTATGTTTTCATGCCTCCAAATCTTGGAGGCTTTTTTATGGTTCGTTCTTATTACCCTTCTGAATGTCACGCTGATTATTTTGACTTTGAGCGTATCGAGGCTCTTAAACCTGCTATTGAGGCTTGTGGCATTTCTACTCTTTCTCAATCCCCAATGCTTGGCTTCCATAAGCAGATGGATAACCGCATCAAGCTCTTGGAAGAGATTCTGTCTTTTCGTATGCAGGGCGTTGAGTTCGATAATGGTGATATGTATGTTGACGGCCATAAGGCTGCTTCTGACGTTCGTGATGAGTTTGTATCTGTTACTGAGAAGTTAATGGATGAATTGGCACAATGCTACAATGTGCTCCCCCAACTTGATATTAATAACACTATAGACCACCGCCCCGAAGGGGACGAAAAATGGTTTTTAGAGAACGAGAAGACGGTTACGCAGTTTTGCCGCAAGCTGGCTGCTGAACGCCCTCTTAAGGATATTCGCGATGAGTATAATTACCCCAAAAAGAAAGGTATTAAGGATGAGTGTTCAAGATTGCTGGAGGCCTCCACTATGAAATCGCGTAGAGGCTTTGCTATTCAGCGTTTGATGAATGCAATGCGACAGGCTCATGCTGATGGTTGGTTTATCGTTTTTGACACTCTCACGTTGGCTGACGACCGATTAGAGGCGTTTTATGATAATCCCAATGCTTTGCGTGACTATTTTCGTGATATTGGTCGTATGGTTCTTGCTGCCGAGGGTCGCAAGGCTAATGATTCACACGCCGACTGCTATCAGTATTTTTGTGTGCCTGAGTATGGTACAGCTAATGGCCGTCTTCATTTCCATGCGGTGCACTTTATGCGGACACTTCCTACAGGTAGCGTTGACCCTAATTTTGGTCGTCGGGTACGCAATCGCCGCCAGTTAAATAGCTTGCAAAATACGTGGCCTTATGGTTACAGTATGCCCATCGCAGTTCGCTACACGCAGGACGCTTTTTCACGTTCTGGTTGGTTGTGGCCTGTTGATGCTAAAGGTGAGCCGCTTAAAGCTACCAGTTATATGGCTGTTGGTTTCTATGTGGCTAAATACGTTAACAAAAAGTCAGATATGGACCTTGCTGCTAAAGGTCTAGGAGCTAAAGAATGGAACAACTCACTAAAAACCAAGCTGTCGCTACTTCCCAAGAAGCTGTTCAGAATCAGAATGAGCCGCAACTTCGGGATGAAAATGCTCACAATGACAAATCTGTCCACGGAGTGCTTAATCCAACTTACCAAGCTGGGTTACGACGCGACGCCGTTCAACCAGATATTGAAGCAGAACGCAAAAAGAGAGATGAGATTGAGGCTGGGAAAAGTTACTGTAGCCGACGTTTTGGCGGCGCAACCTGTGACGACAAATCTGCTCAAATTTATGCGCGCTTCGATAAAAATGATTGGCGTATCCAACCTGCAGAGTTTTATCGCTTCCATGACGCAGAAGTTAACACTTTCGGATATTTCTGATGAGTCGAAAAATTATCTTGATAAAGCAGGAATTACTACTGCTTGTTTACGAATTAAATCGAAGTGGACTGCTGGCGGAAAATGAGAAAATTCGACCTATCCTTGCGCAGCTCGAGAAGCTCTTACTTTGCGACCTTTCGCCATCAACTAACGATTCTGTCAAAAACTGACGCGTTGGATGAGGAGAAGTGGCTTAATATGCTTGGCACGTTCGTCAAGGACTGGTTTAGATATGAGTCACATTTTGTTCATGGTAGAGATTCTCTTGTTGACATTTTAAAAGAGCGTGGATTACTATCTGAGTCCGATGCTGTTCAACCACTAATAGGTAAGAAATCATGAGTCAAGTTACTGAACAATCCGTACGTTTCCAGACCGCTTTGGCCTCTATTAAGCTCATTCAGGCTTCTGCCGTTTTGGATTTAACCGAAGATGATTTCGATTTTCTGACGAGTAACAAAGTTTGGATTGCTACTGACCGCTCTCGTGCTCGTCGCTGCGTTGAGGCTTGCGTTTATGGTACGCTGGACTTTGTGGGATACCCTCGCTTTCCTGCTCCTGTTGAGTTTATTGCTGCCGTCATTGCTTATTATGTTCATCCCGTCAACATTCAAACGGCCTGTCTCATCATGGAAGGCGCTGAATTTACGGAAAACATTATTAATGGCGTCGAGCGTCCGGTTAAAGCCGCTGAATTGTTCGCGTTTACCTTGCGTGTACGCGCAGGAAACACTGACGTTCTTACTGACGCAGAAGAAAACGTGCGTCAAAAATTACGTGCGGAAGGAGTGATGTAATGTCTAAAGGTAAAAAACGTTCTGGCGCTCGCCCTGGTCGTCCGCAGCCGTTGCGAGGTACTAAAGGCAAGCGTAAAGGCGCTCGTCTTTGGTATGTAGGTGGTCAACAATTTTAATTGCAGGGGCTTCGGCCCCTTACTTGAGGATAAATTATGTCTAATATTCAAACTGGCGCCGAGCGTATGCCGCATGACCTTTCCCATCTTGGCTTCCTTGCTGGTCAGATTGGTCGTCTTATTACCATTTCAACTACTCCGGTTATCGCTGGCGACTCCTTCGAGATGGACGCCGTTGGCGCTCTCCGTCTTTCTCCATTGCGTCGTGGCCTTGCTATTGACTCTACTGTAGACATTTTTACTTTTTATGTCCCTCATCGTCACGTTTATGGTGAACAGTGGATTAAGTTCATGAAGGATGGTGTTAATGCCACTCCTCTCCCGACTGTTAACACTACTGGTTATATTGACCATGCCGCTTTTCTTGGCACGATTAACCCTGATACCAATAAAATCCCTAAGCATTTGTTTCAGGGTTATTTGAATATCTATAACAACTATTTTAAAGCGCCGTGGATGCCTGACCGTACCGAGGCTAACCCTAATGAGCTTAATCAAGATGATGCTCGTTATGGTTTCCGTTGCTGCCATCTCAAAAACATTTGGACTGCTCCGCTTCCTCCTGAGACTGAGCTTTCTCGCCAAATGACGACTTCTACCACATCTATTGACATTATGGGTCTGCAAGCTGCTTATGCTAATTTGCATACTGACCAAGAACGTGATTACTTCATGCAGCGTTACCATGATGTTATTTCTTCATTTGGAGGTAAAACCTCTTATGACGCTGACAACCGTCCTTTACTTGTCATGCGCTCTAATCTCTGGGCATCTGGCTATGATGTTGATGGAACTGACCAAACGTCGTTAGGCCAGTTTTCTGGTCGTGTTCAACAGACCTATAAACATTCTGTGCCGCGTTTCTTTGTTCCTGAGCATGGCACTATGTTTACTCTTGCGCTTGTTCGTTTTCCGCCTACTGCGACTAAAGAGATTCAGTACCTTAACGCTAAAGGTGCTTTGACTTATACCGATATTGCTGGCGACCCTGTTTTGTATGGCAACTTGCCGCCGCGTGAAATTTCTATGAAGGATGTTTTCCGTTCTGGTGATTCGTCTAAGAAGTTTAAGATTGCTGAGGGTCAGTGGTATCGTTATGCGCCTTCGTATGTTTCTCCTGCTTATCACCTTCTTGAAGGCTTCCCATTCATTCAGGAACCGCCTTCTGGTGATTTGCAAGAACGCGTACTTATTCGCCACCATGATTATGACCAGTGTTTCCAGTCCGTTCAGTTGTTGCAGTGGAATAGTCAGGTTAAATTTAATGTGACCGTTTATCGCAATCTGCCGACCACTCGCGATTCAATCATGACTTCGTGATAAAAGATTGA\"\n\ncountatoms(phi)\n\n4×4 Matrix{Int64}:\n#   C     H     N     O    \n 6455  6455  6455     0  # A\n 4628  5785  3471  1157  # C\n 6270  6270  6270  1254  # G\n 8420  8420  3368  3368  # T","category":"page"},{"location":"","page":"Home","title":"Home","text":"Now an example of a protein sequence:","category":"page"},{"location":"","page":"Home","title":"Home","text":"lambdaprotein = aa\"MEVNKKQLADIFGASIRTIQNWQEQGMPVLRGGGKGNEVLYDSAAVIKWYAERDAEIENEKLRREVEELRQASEADLQPGTIEYERHRLTRAQADAQELKNARDSAEVVETAFCTFVLSRIAGEIASILDGLPLSVQRRFPELENRHVDFLKRDIIKAMNKAAALDELIPGLLSEYIEQSG*\"\n\ncountatoms(lambdaprotein)\n\n20×5 Matrix{Int64}:\n#  C    H   N   O  S\n  60  140  20  40  0  # A (Ala)\n  90  210  60  30  0  # R (Arg)\n  28   56  14  21  0  # N (Asn)\n  40   70  10  40  0  # D (Asp)\n   3    7   1   2  1  # C (Cys)\n  50   90  10  40  0  # Q (Gln)\n 110  220  44  66  0  # E (Glu)\n  22   55  11  22  0  # G (Gly)\n  12   18   6   4  0  # H (His)\n  78  169  13  26  0  # I (Ile)\n 108  234  18  36  0  # L (Leu)\n  54  126  18  18  0  # K (Lys)\n  15   33   3   6  3  # M (Met)\n  45   55   5  10  0  # F (Phe)\n  25   45   5  10  0  # P (Pro)\n  27   63   9  27  0  # S (Ser)\n  20   45   5  15  0  # T (Thr)\n  22   24   4   4  0  # W (Trp)\n  36   44   4  12  0  # Y (Tyr)\n  50  110  10  20  0  # V (Val)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Sometimes what is needed is the total number of each atom in the sequence. This can be achieved by a simple sum of the matrix:","category":"page"},{"location":"","page":"Home","title":"Home","text":"counts = countatoms(lambdaprotein)\n\nsum(counts, dims=1)\n\n1×5 Matrix{Int64}:\n#  C     H    N    O  S\n 895  1814  270  449  4","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MIT License","category":"page"}]
}
