module BioAtomsCount

export atomcount

using BioSequences: 
  ACGT, DNA, SeqOrView,
  AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V

const dnaweights = [
 #C H N O
  5 5 5 0; # Adenine
  4 5 3 1; # Cytosine
  5 5 5 1; # Guanine
  5 5 2 2; # Thymine
]

const aaweights = [
# C  H  N  O  S
  3  7  1  2  0;  # Alanine (Ala)
  6  14 4  2  0;  # Arginine (Arg)
  4  8  2  3  0;  # Asparagine (Asn)
  4  7  1  4  0;  # Aspartic Acid (Asp)
  3  7  1  2  1;  # Cysteine (Cys)
  5  9  1  4  0;  # Glutamic Acid (Glu)
  5  10 2  3  0;  # Glutamine (Gln)
  2  5  1  2  0;  # Glycine (Gly)
  6  9  3  2  0;  # Histidine (His)
  6  13 1  2  0;  # Isoleucine (Ile)
  6  13 1  2  0;  # Leucine (Leu)
  6  14 2  2  0;  # Lysine (Lys)
  5  11 1  2  1;  # Methionine (Met)
  9  11 1  2  0;  # Phenylalanine (Phe)
  5  9  1  2  0;  # Proline (Pro)
  3  7  1  3  0;  # Serine (Ser)
  4  9  1  3  0;  # Threonine (Thr)
  11 12 2  2  0;  # Tryptophan (Trp)
  9  11 1  3  0;  # Tyrosine (Tyr)
  5  11 1  2  0;  # Valine (Val)
]

const AAs = (AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V)

function atomcount(seq::SeqOrView{A})::Matrix{Int64} where {A}
    atomweights, alph = eltype(seq) == DNA ? (dnaweights, ACGT) : (aaweights,AAs)
    counts =  [count(x, seq) for x in isequal.(alph)]::Vector{Int64} #values(count_kmers(seq, 1))
    return atomweights .* counts
end

end # BioAtomsCount
