import { medicalWords } from '../src/data/medicalWords';

const candidates = [
  'T Lymphocyte', 'B Lymphocyte', 'Natural Killer Cell', 'Macrophage', 'Dendritic Cell',
  'Immunoglobulin G', 'Immunoglobulin E', 'Immunoglobulin A', 'Immunoglobulin M',
  'Complement System', 'Histamine', 'Interferon', 'Interleukin', 'Tumor Necrosis Factor',
  'Anaphylaxis', 'Systemic Lupus Erythematosus', 'Hashimoto', 'Goodpasture',
  'DiGeorge', 'Bruton', 'Severe Combined Immunodeficiency', 'Human Leukocyte Antigen',
  'Graft Versus Host', 'Autoantibody', 'Opsonization',
  // Oncology
  'Hodgkin Lymphoma', 'Non-Hodgkin Lymphoma', 'Small Cell Lung', 'Hepatocellular Carcinoma',
  'Gastric Carcinoma', 'Pancreatic Adenocarcinoma', 'Ovarian Carcinoma', 'Prostate-Specific Antigen',
  'Carcinoembryonic Antigen', 'Alpha-Fetoprotein', 'CA-125', 'Chemotherapy', 'Radiotherapy',
  'Cancer Immunotherapy', 'Neoplasm Metastasis', 'Fine Needle Aspiration', 'TNM Staging',
  'Ewing Sarcoma', 'Osteosarcoma', 'Retinoblastoma', 'Carcinoid Tumor', 'Burkitt Lymphoma'
];

for (const t of candidates) {
  const match = medicalWords.find(w => 
    w.word.English.toLowerCase().includes(t.toLowerCase()) || 
    (w.synonyms && w.synonyms.some(s => s.toLowerCase().includes(t.toLowerCase())))
  );
  if (match) {
    console.log('EXISTS:', t, '->', match.id, match.word.English);
  } else {
    console.log('CLEAR (NEW):', t);
  }
}
