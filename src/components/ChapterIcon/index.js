import styled from 'styled-components';

const content = {
  59: 'e900',
  60: 'e901',
  48: 'e902',
  1: 'e904',
  2: 'e905',
  3: 'e906',
  4: 'e907',
  5: 'e908',
  38: 'e909',
  39: 'e90a',
  6: 'e90b',
  7: 'e90c',
  8: 'e90d',
  9: 'e90e',
  10: 'e90f',
  11: 'e910',
  12: 'e911',
  13: 'e912',
  14: 'e913',
  15: 'e914',
  16: 'e915',
  17: 'e916',
  18: 'e917',
  19: 'e918',
  20: 'e919',
  21: 'e91a',
  22: 'e91b',
  23: 'e91c',
  24: 'e91d',
  25: 'e91e',
  26: 'e91f',
  27: 'e920',
  28: 'e921',
  29: 'e922',
  30: 'e923',
  31: 'e924',
  32: 'e925',
  33: 'e926',
  40: 'e927',
  41: 'e928',
  42: 'e929',
  43: 'e92a',
  44: 'e92b',
  45: 'e92c',
  46: 'e92d',
  34: 'e92e',
  35: 'e92f',
  36: 'e930',
  37: 'e931',
  47: 'e932',
  49: 'e933',
  50: 'e934',
  51: 'e935',
  52: 'e936',
  53: 'e937',
  54: 'e938',
  55: 'e939',
  56: 'e93a',
  57: 'e93b',
  58: 'e93c',
  79: 'e93d',
  80: 'e93e',
  81: 'e93f',
  82: 'e940',
  61: 'e941',
  62: 'e942',
  63: 'e943',
  64: 'e944',
  65: 'e945',
  66: 'e946',
  67: 'e947',
  68: 'e948',
  69: 'e949',
  70: 'e94a',
  71: 'e94b',
  72: 'e94c',
  73: 'e94d',
  74: 'e94e',
  75: 'e94f',
  76: 'e950',
  77: 'e951',
  78: 'e952',
  83: 'e953',
  84: 'e954',
  85: 'e955',
  86: 'e956',
  87: 'e957',
  88: 'e958',
  89: 'e959',
  90: 'e95a',
  91: 'e95b',
  92: 'e95c',
  93: 'e95d',
  94: 'e95e',
  95: 'e95f',
  96: 'e960',
  97: 'e961',
  98: 'e962',
  99: 'e963',
  100: 'e964',
  101: 'e965',
  102: 'e966',
  103: 'e967',
  104: 'e968',
  105: 'e969',
  106: 'e96a',
  107: 'e96b',
  108: 'e96c',
  109: 'e96d',
  110: 'e96e',
  111: 'e96f',
  112: 'e970',
  113: 'e971',
  114: 'e972'
};

export default styled.span`
  font-family: 'surah_names' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 25px;
  float: right;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  content: ${props => content[props.id] || 'e903'};
`;
