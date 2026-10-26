# PLAN — Data portfolio

Plan de trabajo del portafolio. Cada proyecto demuestra un servicio que los clientes piden en Upwork.
Todos los datos son reales y públicos (salvo las facturas del proyecto 8, que son de ejemplo y están marcadas como *sample / synthetic*).

## Herramientas disponibles

| Herramienta | Estado |
|---|---|
| Python 3.13 | Instalado. Es la base de todos los proyectos (entorno virtual `.venv`). |
| LibreOffice 24.2 | Instalado. Se usa para recalcular los Excel y verificar que ninguna fórmula da error. |
| Chromium + Playwright | Instalado. Se usa para tomar capturas del dashboard HTML. |
| R, Quarto | No instalados. Se usa Python (statsmodels, scikit-learn) en su lugar. |
| `gh` | Instalado, pero esta sesión solo tiene acceso al repo `marlonjimenezv/DATOMIA`. Ver "Publicación". |

## Proyectos, datasets y orden

| # | Proyecto | Servicio | Dataset | Fuente y licencia | Estado |
|---|---|---|---|---|---|
| 1 | Excel KPI Report | Excel reporting / KPI dashboard | Online Retail II (UK online retailer, 2009–2011). Se usan 12 meses completos: dic-2010 a nov-2011. | UCI Machine Learning Repository, DOI [10.24432/C5CG6D](https://doi.org/10.24432/C5CG6D). Licencia **CC BY 4.0**. | Listo |
| 2 | Procurement dashboard + Power BI kit | Dashboards / BI | SECOP II – Contratos Electrónicos. Contratos del sector **Educación** firmados en **2025**. | Colombia Compra Eficiente en datos.gov.co, dataset [jbjy-vk9h](https://www.datos.gov.co/Gastos-Gubernamentales/SECOP-II-Contratos-Electr-nicos/jbjy-vk9h). Licencia **CC BY-SA 4.0**. | Listo (falta que armes el .pbix: ver guía) |
| 3 | Supplier master data cleaning | Data cleaning | SECOP II – Proveedores Registrados (personas jurídicas de Boyacá) cruzado con el RUES (registro mercantil). | Colombia Compra Eficiente, dataset [qmzu-gj57](https://www.datos.gov.co/d/qmzu-gj57), y Confecámaras, dataset [c82u-588k](https://www.datos.gov.co/d/c82u-588k). Ambos **CC BY-SA 4.0**. | Listo |
| 4 | Verified B2B list | Data collection / lead list | Registro oficial de Instituciones de Educación Superior (IES) de Colombia + verificación de cada sitio web. | Ministerio de Educación Nacional en datos.gov.co, dataset [n5yy-8nav](https://www.datos.gov.co/d/n5yy-8nav). **CC BY-SA 4.0**. | Pendiente |
| 5 | Survey analysis | Statistical analysis / thesis help | General Social Survey (GSS) 2024, microdatos + codebook oficial. | NORC at the University of Chicago, [gss.norc.org](https://gss.norc.org/us/en/gss/get-the-data.html). Uso libre con cita obligatoria (términos de NORC). Los microdatos **no** se suben al repo: se descargan con script. | Pendiente |
| 6 | Churn prediction | Predictive analytics / ML | Iranian Churn Dataset (3.150 clientes de una telco). | UCI Machine Learning Repository, DOI [10.24432/C5JW3Z](https://doi.org/10.24432/C5JW3Z). **CC BY 4.0**. | Pendiente |
| 7 | Economic brief | Economic research / policy analysis | Salario mínimo de Colombia frente a la inflación, 2001–2025. | OIT – ILOSTAT (salario mínimo, **CC BY 4.0**); DANE – IPC (uso libre citando "Fuente: DANE"); Banco Mundial – WDI (**CC BY 4.0**); valor 2025 del Decreto 1572 de 2024. | Pendiente |
| 8 | AI PDF-to-Excel automation | AI automation / data extraction | Facturas PDF de ejemplo generadas por script, marcadas **SAMPLE / SYNTHETIC**. | Generadas por el propio proyecto (única excepción permitida). | Pendiente |

Orden de trabajo: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. Cada proyecto se construye, se verifica (sección 7 del prompt) y se hace commit antes de pasar al siguiente.

## Decisiones importantes

- **Privacidad.** Solo se publican datos de organizaciones. En SECOP II se eliminan nombres, documentos, cuentas bancarias y datos de representantes legales, supervisores y ordenadores del gasto. En el proyecto 3 los correos que no son institucionales se enmascaran y los celulares se ocultan parcialmente (ver README del proyecto).
- **Archivos grandes.** Online Retail II (45 MB) y los microdatos de la GSS no se suben a git: cada proyecto tiene un script que los descarga en `data/raw/`.
- **Licencias share-alike.** Los datos derivados de datos.gov.co se publican bajo la misma licencia CC BY-SA 4.0.

## Publicación

Esta sesión solo puede escribir en el repo `marlonjimenezv/DATOMIA`, que hoy es el sitio web de Datomia. Por eso el portafolio vive en la carpeta `data-portfolio/` de la rama de trabajo. Para publicarlo como repo independiente `data-portfolio` con GitHub Pages hay que seguir `PUBLICAR.md` (lo haces tú, son 5 comandos).

## Bloqueos

Ninguno por ahora.
